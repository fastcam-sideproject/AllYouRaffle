'use client';

import React, { useEffect, useRef } from 'react';
import * as Phaser from 'phaser';

class Breakout extends Phaser.Scene {
  bricks!: Phaser.Physics.Arcade.StaticGroup;
  ball!: Phaser.Physics.Arcade.Image;
  paddle!: Phaser.Physics.Arcade.Image;
  score: number = 0;
  scoreText!: Phaser.GameObjects.Text;
  constructor() {
    super({ key: 'breakout' });
  }

  /**
   * @description 필요한 assets을 로드한다.
   */
  preload() {
    this.load.atlas('assets', '/assets/games/breakout.png', '/assets/games/breakout.json');
  }
  create() {
    this.physics.world.setBoundsCollision(true, true, true, false);

    this.bricks = this.physics.add.staticGroup({
      key: 'assets',
      frame: ['blue1', 'red1', 'green1', 'yellow1', 'silver1', 'purple1'],
      frameQuantity: 10,
      gridAlign: { width: 10, height: 6, cellWidth: 64, cellHeight: 32, x: 112, y: 100 },
    });

    this.ball = this.physics.add
      .image(400, 500, 'assets', 'ball1')
      .setCollideWorldBounds(true)
      .setBounce(1);
    this.ball.setData('onPaddle', true);

    this.paddle = this.physics.add.image(400, 550, 'assets', 'paddle1').setImmovable();

    this.scoreText = this.add.text(16, 16, 'Score: 0', {
      fontSize: '32px',
    });

    this.physics.add.collider(
      this.ball,
      this.bricks,
      this.hitBrick as Phaser.Types.Physics.Arcade.ArcadePhysicsCallback,
      undefined,
      this,
    );
    this.physics.add.collider(
      this.ball,
      this.paddle,
      this.hitPaddle as Phaser.Types.Physics.Arcade.ArcadePhysicsCallback,
      undefined,
      this,
    );

    this.input.on(
      'pointermove',
      (pointer: Phaser.Input.Pointer) => {
        this.paddle.x = Phaser.Math.Clamp(pointer.x, 52, 748);

        if (this.ball.getData('onPaddle')) {
          this.ball.x = this.paddle.x;
        }
      },
      this,
    );

    this.input.on(
      'pointerup',
      (pointer: Phaser.Input.Pointer) => {
        if (this.ball.getData('onPaddle')) {
          this.ball.setVelocity(-75, -300);
          this.ball.setData('onPaddle', false);
        }
      },
      this,
    );
  }

  hitBrick(ball: Phaser.Physics.Arcade.Image, brick: Phaser.Physics.Arcade.Image) {
    brick.disableBody(true, true);

    this.score += 100;
    this.scoreText.setText(`Score: ${this.score}`);

    if (this.bricks.countActive() === 0) {
      this.resetLevel();
    }
  }

  resetBall() {
    this.ball.setVelocity(0);
    this.ball.setPosition(this.paddle.x, 500);
    this.ball.setData('onPaddle', true);
  }

  resetLevel() {
    this.resetBall();

    this.bricks.children.each((brick) => {
      (brick as Phaser.Physics.Arcade.Image).enableBody(false, 0, 0, true, true);
      return true;
    });
  }

  hitPaddle(ball: Phaser.Physics.Arcade.Image, paddle: Phaser.Physics.Arcade.Image) {
    let diff = 0;

    if (ball.x < paddle.x) {
      diff = paddle.x - ball.x;
      ball.setVelocityX(-10 * diff);
    } else if (ball.x > paddle.x) {
      diff = ball.x - paddle.x;
      ball.setVelocityX(10 * diff);
    } else {
      ball.setVelocityX(2 + Math.random() * 8);
    }
  }

  update() {
    if (this.ball.y > 600) {
      this.resetBall();
    }
  }
}

export default function BreakoutGame() {
  const gameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const config = {
        type: Phaser.AUTO,
        width: window.innerWidth < 768 ? window.innerWidth : 800,
        height: window.innerHeight < 768 ? window.innerHeight : 600,
        parent: gameRef.current,
        scene: [Breakout],
        physics: {
          default: 'arcade',
        },
      };

      const game = new Phaser.Game(config);

      return () => {
        game.destroy(true);
      };
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="text-3xl text-center mb-4">벽돌 부수기</h1>
      <div ref={gameRef} className="w-full h-full md:w-[800px] md:h-[600px]" />
    </div>
  );
}
