let logoScale = 0.45;
let chosenScreenX = 1280;
let chosenScreenY = 720;

class QuetzalWhiteScreen extends Phaser.Scene {
    constructor() {
        super('quetzalWhiteScreen');
    }
    preload() {}
    create() {
        this.textObject = this.add.text(
            570,
            530,
            "Press 'Space' to start scene.",
            {fontFamily: "Gill Sans MT", fontWeight: "bold", fontSize: "50px", color: "#000000"}
        );

        this.swap = this.input.keyboard.addKey('SPACE')
    }
    update() {
        if(Phaser.Input.Keyboard.JustDown(this.swap)) {
            this.scene.start("quetzalIntro")
        }
    }
}

class QuetzalIntro extends Phaser.Scene {
    constructor() {
        super('quetzalIntro');
    }
    preload() {
        this.load.path = 'assets/';
        this.load.image('logo', 'badOmenlogo.png');
        this.load.audio('woosh', 'woosh.mp3');
        this.load.audio('whush', 'whush.mp3');
    }
    create() {

        //this.sound.play('woosh');
        this.sound.play('whush');

        this.imageObject = this.add.image(-(chosenScreenX/2 - ('logo'.length)), chosenScreenY/2 - ('logo'.length + 20), 'logo');
        this.imageObject.setScale(logoScale);

        this.tweens.add({
            targets: this.imageObject,
            x: chosenScreenX/2 - ('logo'.length),
            y: chosenScreenY/2 - ('logo'.length + 20),
            duration: 1250,
            ease: 'Quart.easeInOut',
        });

        this.textObject = this.add.text(
            570 - 9000,
            530 - 60,
            "Bad Tagline, Good Games",
            {fontFamily: "Gill Sans MT", fontWeight: "bold", fontSize: "50px", color: "#000000"}
        );

        this.endMessage = this.add.text(
            570 -9000,
            530,
            "Press 'Space' to switch scenes.",
            {fontFamily: "Gill Sans MT", fontWeight: "bold", fontSize: "50px", color: "#000000"}
        );

        this.tweens.add({
            targets: this.textObject,
            x: 570,
            alpha: 0,
            duration: 0,
        });

        this.tweens.add({
            targets: this.endMessage,
            x: 500,
            alpha: 0,
            duration: 0,
        });

        this.tweens.add({
            targets: this.textObject,
            x: 570,
            y: 530,
            alpha: 1,
            delay: 1500,
            duration: 350,
            ease: 'Quart.easeInOut',
        });

        this.tweens.add({
            targets: this.imageObject,
            alpha: 0,
            delay: 2800,
            duration: 1250,
            ease: 'Quart.easeInOut',
        });

        this.tweens.add({
            targets: this.textObject,
            alpha: 0,
            delay: 2800,
            duration: 1250,
            ease: 'Quart.easeInOut',
        });

        this.tweens.add({
            targets: this.endMessage,
            alpha: 1,
            delay: 4300,
            duration: 500,
            ease: 'Quart.easeInOut',
        });

        this.swap = this.input.keyboard.addKey('SPACE')

    }
    update() {
        if(Phaser.Input.Keyboard.JustDown(this.swap)) {
            this.scene.start("quetzalLoading")
        }
    }
}

class QuetzalLoading extends Phaser.Scene {
    constructor() {
        super('quetzalLoading');
    }
    preload() {
        this.load.path = 'assets/';
        this.load.audio('printer', 'printer.mp3');
    }
    create() {

        this.sound.play('printer');

        this.graphicsBG = this.add.graphics();

        this.graphicsBG.fillStyle(0x000000, 1);

        this.graphicsBG.fillRect(0, 0, chosenScreenX, chosenScreenY);

        this.graphics = this.add.graphics();

        this.graphics.fillGradientStyle(
            0x00808A, 0x004845, 0x006688, 0x02222,
            1, 1, 1, 1
        );

        this.graphics.fillRect(0, 0, chosenScreenX, chosenScreenY);

        this.graphics.lineStyle(10, 0x000000, 1);

        for (let i = 0; i < 50; i++) {
            this.graphics.lineBetween(-1200 + i*50, -10, -200 + i*50, chosenScreenY + 10);
        }
        
        this.graphics2 = this.add.graphics();

        this.graphics2.lineStyle(15, 0x000000, 1);

        for (let i = 0; i < 500; i++) {
            this.lines = this.graphics2.lineBetween(-10000 + -1200 + i*50, -8000 + -10, -10000 + -200 + i*50, 8000 + chosenScreenY + 10);
        }

        this.tweens.add({
            targets: this.lines,
            angle: 90,
            duration: 5000,
            repeat: -1,
            yoyo: true,
            ease: "Sine.easeInOut",
        });

        this.textObject = this.add.text(
            800,
            550,
            "Loading...",
            {fontFamily: "Gill Sans MT", fontWeight: "bold", fontSize: "100px", color: "#22BABA", stroke: "#000000", strokeThickness: 5,}
        );

        this.tweens.add({
            targets: this.graphics,
            alpha: 0.1,
            delay: 5000,
            duration: 7500,
            ease: "Quart.easeInOut",
        });

        this.endMessage = this.add.text(
            570 -9000,
            530,
            "Press 'Space' to switch scenes.",
            {fontFamily: "Gill Sans MT", fontWeight: "bold", fontSize: "50px", color: "#ffffff"}
        );

        this.tweens.add({
            targets: this.endMessage,
            x: 570,
            y: 470,
            alpha: 0,
            duration: 0,
        });

        this.tweens.add({
            targets: this.endMessage,
            alpha: 1,
            delay: 7000,
            duration: 5000,
            ease: 'Quart.easeInOut',
        });

        this.swap = this.input.keyboard.addKey('SPACE')

    }
    update() {
        if(Phaser.Input.Keyboard.JustDown(this.swap)) {
            this.scene.start("quetzalTitle")
        }
    }
}

class QuetzalTitle extends Phaser.Scene {
    constructor() {
        super('quetzalTitle');
    }
    preload() {
        this.load.path = 'assets/';
        this.load.image('hand', 'handPointing.png');
        this.load.image('bubble', 'textBubble.png');
        this.load.audio('woosh', 'woosh.mp3');
        this.load.audio('whush', 'whush.mp3');
    }
    create() {

        this.sound.play('woosh');
        //this.sound.play('whush');

        this.graphics = this.add.graphics();

        this.graphics.fillGradientStyle(
            0x0080ff, 0x004845, 0x00AA88, 0x02222,
            1, 1, 1, 1
        );

        this.graphics.fillRect(0, 0, chosenScreenX, chosenScreenY);

        this.graphics.lineStyle(35, 0x000000, 1);

        for (let i = 0; i < 50; i++) {
            this.graphics.lineBetween(-1000 + i*100, -30, -2200 + i*100, chosenScreenY + 30);
        }

        this.titleObject1 = this.add.text(
            chosenScreenX/2 - 400,
            -150,
            "NON-COMMITAL",
            {fontFamily: "Gill Sans MT", fontWeight: "bold", fontSize: "100px", color: "#ffffff", stroke: "#000000", strokeThickness: 5,}
        );

        this.titleObject2 = this.add.text(
            chosenScreenX/2 - 250,
            -240,
            "TITLE",
            {fontFamily: "Gill Sans MT", fontWeight: "bold", fontSize: "175px", color: "#ffffff", stroke: "#000000", strokeThickness: 5,}
        );

        this.textObject = this.add.text(
            chosenScreenX/2 - 160,
            360,
            "Start\nSettings\nCredits\nQuit",
            {fontFamily: "Gill Sans MT", fontWeight: "bold", fontSize: "75px", color: "#ffffff", stroke: "#000000", strokeThickness: 5, align: "center"}
        );

        this.textObject = this.add.text(
            10,
            660,
            "version num.",
            {fontFamily: "Gill Sans MT", fontWeight: "bold", fontSize: "50px", color: "#ffffff", stroke: "#000000", strokeThickness: 5}
        );

        this.textObject = this.add.text(
            920,
            615,
            "Bad Omen Studios\nAny Rights Reserved",
            {fontFamily: "Gill Sans MT", fontWeight: "bold", fontSize: "40px", color: "#ffffff", stroke: "#000000", strokeThickness: 5, align: "right"}
        );

        this.tweens.add({
            targets: this.titleObject1,
            y: 50,
            delay: 500,
            duration: 1000,
            ease: 'Quart.easeInOut',
        });

        this.tweens.add({
            targets: this.titleObject2,
            y: 140,
            duration: 1000,
            ease: 'Quart.easeInOut',
        });

        this.handObject = this.add.image(-450, 410, 'hand');
        this.handObject.setScale(0.05);

        this.tweens.add({
            targets: this.handObject,
            x: 450,
            y: 410,
            delay: 2000,
            duration: 1000,
            ease: 'Quart.easeInOut',
        });

        this.tweens.add({
            targets: this.handObject,
            x: 450 - 50,
            y: 410 + 85,
            delay: 3000,
            duration: 1000,
            ease: 'Quart.easeInOut',
        });

        this.tweens.add({
            targets: this.handObject,
            x: 400 + 10,
            y: 495 + 85,
            delay: 4000,
            duration: 1000,
            ease: 'Quart.easeInOut',
        });
        
        this.tweens.add({
            targets: this.handObject,
            x: 410 + 40,
            y: 580 + 90,
            delay: 5000,
            duration: 1000,
            ease: 'Quart.easeInOut',
        });

        this.tweens.add({
            targets: this.handObject,
            x: 450 + 75,
            delay: 6000,
            duration: 1000,
            ease: 'Back.easeInOut',
        });

        this.tweens.add({
            targets: this.handObject,
            x: 450,
            angle: -90,
            delay: 7000,
            duration: 1000,
            ease: 'Quart.easeOut',
        });

        this.bubbleObject = this.add.image(1025, 350, 'bubble');
        this.bubbleObject.setScale(0.07);

        this.textObject = this.add.text(
            875,
            300,
            "Title/Premise Can\nFreely Be Changed!",
            {fontFamily: "Gill Sans MT", fontWeight: "bold", fontSize: "40px", color: "#ffffff", stroke: "#000000", strokeThickness: 5, align: "center"}
        );

        this.endMessage = this.add.text(
            570 -9000,
            400,
            "All Scenes\nDone.",
            {fontFamily: "Gill Sans MT", fontWeight: "bold", fontSize: "75px", color: "#ffffff", stroke: "#000000", strokeThickness: 5, align: "center"}
        );

        this.tweens.add({
            targets: this.endMessage,
            x: 50,
            y: 400,
            alpha: 0,
            duration: 0,
        });

        this.tweens.add({
            targets: this.endMessage,
            alpha: 1,
            delay: 7000,
            duration: 2000,
            ease: 'Quart.easeInOut',
        });

        this.tweens.add({
            targets: this.bubbleObject,
            angle: 360,
            duration: 1500,
            ease: 'Quart.easeInOut',
            repeat: -1
        });

    }
    update() {}
}

let config = {
    type: Phaser.WEBGL,
    width: chosenScreenX,
    height: chosenScreenY,
    backgroundColor: 0xffffff,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [QuetzalWhiteScreen, QuetzalIntro, QuetzalLoading, QuetzalTitle],
}

let game = new Phaser.Game(config);