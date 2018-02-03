/**
 * Created by aarnavjindal on 30/01/18.
 */
var PreloadState = {
    preload: function() {
        loadImages();
        xmid = this.game.world.centerX;
        ymid = this.game.world.centerY;


        this.clouds = this.add.group();
        this.clouds.enableBody = true;

        var cl1 = this.add.sprite(xmid+100,ymid-100,'cloud');
        cl1.alpha = 0.8;
        cl1.scale.setTo(.75,.75);
        this.game.physics.arcade.enable(cl1);
        cl1.body.velocity.y = -5;


        var cl2 = this.add.sprite(xmid-250,ymid+100,'cloud');
        cl2.alpha = 0.5;
        cl2.scale.setTo(.75,.75);
        this.game.physics.arcade.enable(cl2);
        cl2.body.velocity.y = -8;


        var cl3 = this.add.sprite(xmid,game_height-100,'cloud');
        cl3.alpha = 0.9;
        cl3.scale.setTo(.75,.75);
        this.game.physics.arcade.enable(cl3);
        cl3.body.velocity.y = -6;


        this.clouds.create(100,100,'cloud');
        this.clouds.create(xmid+100,ymid+300,'cloud');
        this.clouds.create(xmid-100,300,'cloud').scale.setTo(1.24,1.24);
        this.clouds.create(game_length-200,500,'cloud');
        this.clouds.create(150,game_height+200,'cloud');

        this.clouds.enableBody = true;
        this.clouds.setAll('body.velocity.y', -20);


        this.preloadBar = this.add.sprite(this.game.world.centerX,120, 'loader');
        this.preloadBar.anchor.setTo(0.5);
        this.preloadBar.scale.setTo(1,2);
        this.load.setPreloadSprite(this.preloadBar);
        var style = { fill: '#fff'};
        var loading_text = this.game.add.text(xmid,123,"LOADING...", style);
        loading_text.anchor.setTo(0.5,0.5);
    },
    loadUpdate: function () {

    },
    create: function() {
        this.state.start('GameState');
    }
};

function loadImages() {
    game.load.image('grass', 'assets/grass.png');
    game.load.image('ground', 'assets/ground.png');
    game.load.image('leftbtn', 'assets/back.png');
    game.load.image('rightbtn', 'assets/front.png');
    game.load.image('tree-bright-e', 'assets/tree-bright-e.png');
    game.load.image('tree-dark-c', 'assets/tree-dark-c.png');
    game.load.image('tree-dark-a', 'assets/tree-dark-a.png');
    game.load.image('tree-dark-d', 'assets/tree-dark-d.png');
    game.load.image('mountain', 'assets/mountain.png');
    game.load.image('android', 'assets/android.png');
    game.load.image('webdev', 'assets/webdev.png');
    game.load.spritesheet('about', 'assets/about2.png',325,100);
    game.load.image('building-1', 'assets/building-1.png');
    game.load.image('name-banner', 'assets/name-banner.png');
    game.load.image('welcome-banner', 'assets/welcome_banner.png');
    game.load.image('india-gate', 'assets/india-gate.png');
    game.load.image('red-fort', 'assets/red-fort.png');
    game.load.image('milestone', 'assets/milestone.png');
    game.load.image('school', 'assets/school.png');
    game.load.image('college', 'assets/college.png');
    game.load.image('result', 'assets/result.png');
    game.load.spritesheet('dude', 'assets/dude.png', 200, 200);
}