function panggilObject(){
    const hewanMamalia = {
        namaHewan :'kucing',
        warna : 'hitam',
        umurHewan :'2 tahun',
    }
    for( let x in hewanMamalia)
        console.log(hewanMamalia[x])
}

panggilObject()