const songModel = require("../models/song.model")
const id3 = require("node-id3")
const storageService = require("../services/storage.service")

async function uploadSong(req, res){
    
    const songBuffer = req.file.buffer
    const { mood } = req.body

    const tags = id3.read(songBuffer)

    if(tags.image){
        console.log(tags.image.imageBuffer)
    } else {
        console.log("No image found in this song")
    }
    
    const [ songFile, posterFile ] = await Promise.all([
        storageService.uploadFile({
        buffer: songBuffer,
        filename: tags.title + ".mp3",
        folder: "/cohort-2/spotify/songs"
        }),

        storageService.uploadFile({
        buffer: tags.image.imageBuffer,
        filename: tags.title + ".jpeg",
        folder: "/cohort-2/spotify/posters"
        })
    ])

    const song = await songModel.create({
        title: tags.title,
        url: songFile.url,
        posterUrl: posterFile.url,
        mood
    })

    res.status(201).json({
        message: "song created successfully",
        song
    })
}

async function getSong(req, res) {
    const { mood } = req.query;

    const songs = await songModel.find({ mood });

    if (!songs.length) {
        return res.json({
            message: "no songs found",
            song: null
        });
    }

    // ✅ random index
    const randomIndex = Math.floor(Math.random() * songs.length);
    const song = songs[randomIndex];

    res.json({
        message: "random song fetched",
        song
    });
}

module.exports = {
    uploadSong,
    getSong
}