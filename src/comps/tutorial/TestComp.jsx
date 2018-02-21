import React from 'react';
import PropTypes from 'prop-types';
import Clock from './Clock';
// import Checkbox from './Checkbox';

// sample of Stateless function
const PropText = (props) => <p>{ props.newName } is here in props</p>;
const PropTextV2 = ({ nickName }) => <p>{ nickName } is here in props using another syntax</p>;

class TestComp extends React.Component {
  render() {
    return (
      <div className="testComp">
        <h3>I&apos;m {this.props.myName}, and {this.props.myAge}-years-old</h3>
        <PropText newName="WEN" />
        <PropTextV2 nickName="Sweety" />
        <Clock date={new Date()} />
        {/* <Checkbox label="Checkbox 1:" defaultStatus={true} /> */}
      </div>
    );
  }
}

TestComp.propTypes = {
  myName: PropTypes.string,
  myAge: PropTypes.number
};

PropText.propTypes = {
  newName: PropTypes.string
};
PropTextV2.propTypes = {
  nickName: PropTypes.string
};

export default TestComp;
