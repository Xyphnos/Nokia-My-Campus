import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

const Alert = ({text, buttonText, type, onClick}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!onClick) {
      const timer = setTimeout(() => {
        dispatch({type});
      }, 6000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, []);// eslint-disable-line
  return (
      <div className="updateAlert">
        {text} {buttonText && <button onClick={onClick}>{buttonText}</button>}
      </div>
  );
};

export default Alert;