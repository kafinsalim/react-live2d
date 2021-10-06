import { LAppDelegate } from "./lappdelegate";
import * as LAppDefine from "./lappdefine";
import React, { useEffect } from "react";
import "./asset/index.css";

function ReactLive2d(props) {
  useEffect(() => {
    console.log("props", props);

    props.ModelList
      ? LAppDefine.lappdefineSet.setModelDir(props.ModelList)
      : LAppDefine.lappdefineSet.setModelDir([]);
    props.TouchBody
      ? LAppDefine.lappdefineSet.setHitBody(props.TouchBody)
      : LAppDefine.lappdefineSet.setHitBody([]);
    props.TouchHead
      ? LAppDefine.lappdefineSet.setHitHead(props.TouchHead)
      : LAppDefine.lappdefineSet.setHitHead([]);
    props.TouchDefault
      ? LAppDefine.lappdefineSet.setHitDefault(props.TouchDefault)
      : LAppDefine.lappdefineSet.setHitDefault([]);
    props.PathFull
      ? LAppDefine.lappdefineSet.setPathFull(props.PathFull)
      : LAppDefine.lappdefineSet.setPathFull("");

    if (!navigator.userAgent.match(/mobile/i) || props.MobileShow == true) {
      if (LAppDelegate.getInstance().initialize() == false) {
        return;
      }

      LAppDelegate.getInstance().run();

      // window.onbeforeunload = () => LAppDelegate.releaseInstance();
    }
  }, []);

  useEffect(() => {
    if (props.release == true) {
      LAppDelegate.releaseInstance();
    }
  }, [props.release]);

  return (
    <div className={props.className}>
      <canvas
        id="canvas-live2d"
        className={props.className}
        width={props.width ? props.width : "300"}
        height={props.height ? props.height : "500"}
      />
    </div>
  );
}

export default ReactLive2d;
