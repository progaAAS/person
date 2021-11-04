import React from "react";
import cn from "classnames";

const MyButton = ({children, className, ...props}) => {
    
    const classNames = cn(
        className
      );
  
    return(
        <button {...props} className={classNames}>{children}</button>
    )
}
export default MyButton;