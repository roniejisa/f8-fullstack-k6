import clsx from "clsx";
import styles from "./TableResult.module.scss";
export const getRate = (objResult) => {
    if (!objResult.win) {
      return 0;
    }
    return Math.round(
      ((objResult.total - objResult.count + 1) / objResult.total) * 100
    );
  };
  
  export  const getStyleRate = (objResult) => {
    return clsx(
      getRate(objResult) > 0
        ? getRate(objResult) > 50
          ? styles.win
          : styles.subWin
        : styles.lose
    );
  };
  
  export const getObjResult = (data) => {
    return data.reduce((obj, current) => {
      if (!obj.count) {
        obj.count = 1;
      } else {
        obj.count++;
      }
  
      if (current.win) {
        obj.win = true;
      }
  
      if (current.total) {
        obj.total = current.total;
      }
  
      return obj;
    }, {});
  };