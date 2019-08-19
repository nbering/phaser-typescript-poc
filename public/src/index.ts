/// <reference types="phaser"/>

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 300},
            debug: false
        }
    },
    scene: {
        preload: function(this: Phaser.Scene){

        },
        create: function(this: Phaser.Scene){

        },
        update: function(this: Phaser.Scene, time: number, delta: number){

        }
    }
}

const game = new Phaser.Game(config);
