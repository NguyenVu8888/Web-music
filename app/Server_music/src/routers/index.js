var accountRouter = require('../routers/account')
var songsRouter = require('../routers/songs')
var MvsRouter = require('../routers/mv')
var SingersRouter = require('../routers/singers')
var AlbumsRouter = require('../routers/albums')
var PlaylistsRouter = require('../routers/playlists')
var TypesRouter = require('../routers/types')
var RankRouter = require('../routers/ranks')
var ImageRouter = require('../routers/image')

function route(app){
    app.use('/api/account/',accountRouter)
    app.use('/api/songs/', songsRouter)
    app.use('/api/mv/', MvsRouter)
    app.use('/api/singer/', SingersRouter)
    app.use('/api/album', AlbumsRouter)
    app.use('/api/Playlist', PlaylistsRouter)
    app.use('/api/type', TypesRouter)
    app.use('/api/rank', RankRouter)
    app.use('/api/image', ImageRouter)
}

module.exports = route

