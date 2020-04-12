import React, { Component } from 'react';
import style from './style.css';
export default class Input extends Component {
  onChange = (e) => {
    const value = e.target.value;
    const { id, onChange } = this.props;

    onChange({ fieldId: id, value });
  };
onBlur=()=>{
  const{ onBlur }=this.props;
  onBlur && onBlur();
}
  render() {
    const { value, error, placeholder } = this.props;

    return (
      <div>
      <input
       placeholder={placeholder}
        type="text"
        value={value}
        onChange={this.onChange}
        className={`${style.inputComponent} ${error ? style.inputError : ''}`}
        onBlur = {this.onBlur}
      />
      <div className={style.error}>{error}</div>
      </div>
    );
  }
}
