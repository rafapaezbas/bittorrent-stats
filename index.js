var krpc = require('k-rpc')
var geoip = require('geoip-country')
var rpc = krpc()
var crypto = require("crypto");
var countries = {}
var ips = []

const onreply = (message, node) => {
    console.log(node)
    const ip = node.address
    const country = geoip.lookup(node.address).country
    if(ips.indexOf(ip) == -1){
        if(countries[country] == undefined){
            countries[country] = 1
        }else{
            countries[country] += 1
        }
    }
    ips.push(ip)
}

const closest = (target) => {
    return new Promise((resolve,reject) => {
        rpc.closest(target, {q: 'get_peers', a: {info_hash: target}}, onreply, () => {
            resolve()
        })
    })
}

const populate = () => {
    return new Promise((resolve,reject) => {
        rpc.populate(rpc.id, {q: 'find_node', a: {id: rpc.id, target: rpc.id}}, () => {
            resolve()
        })
    })
}

const toSortedArray = (countries) => {
    const sortable = []
    for(const country in countries){
        sortable.push([country,countries[country]])
    }
    return sortable.sort((a,b) => b[1] - a[1]);
}

const main = async () => {
    await populate()
    for(var i = 0; i < 20; i++){
        var id = crypto.randomBytes(20).toString('hex')
        var target = Buffer.from(id, 'hex')
        await closest(target)
    }
    console.log(toSortedArray(countries))
}

main()
