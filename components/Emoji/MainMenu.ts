export default class MainMenu extends Phaser.Scene {
  music!: Phaser.Sound.BaseSound;
  constructor() {
    super('MainMenu');
  }

  create() {
    let background = this.add.image(400, 300, 'background');

    this.tweens.add({
      targets: background,
      alpha: { from: 0, to: 1 },
      duration: 1000,
    });

    const fontStyle: Phaser.Types.GameObjects.Text.TextStyle = {
      fontFamily: 'Arial',
      fontSize: 48,
      color: '#ffffff',
      fontStyle: 'bold',
      padding: {
        left: 16,
        right: 16,
        top: 16,
        bottom: 16,
      },
      shadow: {
        color: '#000000',
        fill: true,
        offsetX: 2,
        offsetY: 2,
        blur: 4,
      },
    };

    this.add.text(20, 20, 'High Score: ' + this.registry.get('highscore'), fontStyle);

    let logo = this.add.image(400, -200, 'logo');

    if (!this.music) {
      this.music = this.sound.add('music', { loop: true });
      this.music.play();
    }

    this.tweens.add({
      targets: logo,
      y: 300,
      ease: 'bounce.out',
      duration: 1200,
    });

    this.input.once('pointerdown', () => {
      this.scene.start('MainGame');
    });
  }
}
