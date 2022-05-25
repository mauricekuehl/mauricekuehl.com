import { useEffect, useRef } from "react";
import {
  Engine,
  Render,
  Bodies,
  Runner,
  Mouse,
  MouseConstraint,
  Composite,
} from "matter-js";
import cookieStyle from "../styles/Cookie.module.scss";

export default function Cookie() {
  const scene = useRef();
  const engine = useRef(Engine.create());

  useEffect(() => {
    const cw = document.body.clientWidth;
    const ch = document.body.clientHeight;

    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        background: "transperant",
      },
    });
    const widthBall = Math.round(Math.sqrt(cw) * 1.8);
    const areaBall = widthBall ** 2;
    const area = ch * cw;
    const balls = area / areaBall / 1.5;
    Composite.add(engine.current.world, [
      Bodies.rectangle(0, ch + 170, cw * 3, 400, { isStatic: true }),
      Bodies.rectangle(-50, 0, 100, ch * 2, { isStatic: true }),
      Bodies.rectangle(cw + 50, 0, 100, ch * 2, { isStatic: true }),
      ...Array(Math.round(balls))
        .fill(null)
        .map(() => {
          const rand = Math.random();
          const scale = widthBall * 0.0085;
          const ratio = 2 / 3;
          return Bodies.circle(
            cw / 2 + (Math.random() * (cw / 5) - cw / 10),
            -5000 * Math.random(),
            widthBall * ratio + widthBall * (1 - 2 * ratio) * rand,
            {
              friction: 0,
              frictionStatic: 0,
              density: 0.00002,
              render: {
                sprite: {
                  xScale: scale * ratio + scale * (1 - 2 * ratio) * rand,
                  yScale: scale * ratio + scale * (1 - 2 * ratio) * rand,
                  texture: "/images/cookie_1f36a.png",
                },
              },
            }
          );
        }),
    ]);
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine.current, {
      mouse,
      constraint: {
        stiffness: 0.4,
        render: {
          visible: false,
        },
      },
    });
    Composite.add(engine.current.world, mouseConstraint);
    Runner.run(engine.current);
    Render.run(render);
  }, []);

  return <div className={cookieStyle.container} ref={scene} />;
}
