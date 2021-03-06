  
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Script from 'react-load-script';
import Skeleton from 'react-loading-skeleton';

class GoogleShareToClassRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scriptLoaded: false,
      scriptError: false,
    };
  }

  componentDidMount() {
    // eslint-disable-next-line no-underscore-dangle
    window.___gcfg = { parsetags: 'explicit' };

    window.onShareCompleteInternal = this.onShareCompleteInternal.bind(this);
    window.onShareStartInternal = this.onShareStartInternal.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.scriptLoaded && !nextState.scriptError) {
      window.gapi.sharetoclassroom.go('content');
      return true;
    }

    return false;
  }

  onShareCompleteInternal() {
    const { onShare, onShareComplete } = this.props;

    onShare('complete');
    onShareComplete();
  }

  onShareStartInternal() {
    const { onShare, onShareStart } = this.props;

    onShare('start');
    onShareStart();
  }

  handleScriptCreate() {
    this.setState({ scriptLoaded: false });
  }

  handleScriptError() {
    this.setState({ scriptLoaded: false });
  }

  handleScriptLoad() {
    this.setState({ scriptLoaded: true });
  }

  render() {
    const { scriptLoaded } = this.state;
    const {
      body, itemType, size, theme, title, url,
    } = this.props;

    return (
      <div>
        <Script
          url="https://apis.google.com/js/platform.js"
          onCreate={this.handleScriptCreate.bind(this)}
          onError={this.handleScriptError.bind(this)}
          onLoad={this.handleScriptLoad.bind(this)}
        />

        {!scriptLoaded && (
          <Skeleton
            height={size}
            width={size}
            duration={20}
          />
        )}

        <div
          className="g-sharetoclassroom"
          data-body={body}
          data-itemtype={itemType}
          data-onsharecomplete="onShareCompleteInternal"
          data-onsharestart="onShareStartInternal"
          data-size={size}
          data-theme={theme}
          data-title={title}
          data-url={url}
        />
      </div>
    );
  }
}

GoogleShareToClassRoom.defaultProps = {
  body: null,
  itemType: null,
  onShare: () => {},
  onShareComplete: () => {},
  onShareStart: () => {},
  size: 32,
  theme: 'classic',
  title: null,
  url: null,
};

GoogleShareToClassRoom.propTypes = {
  body: PropTypes.string,
  itemType: PropTypes.oneOf([
    'announcement',
    'assignment',
    'material',
    'question',
  ]),
  onShare: PropTypes.func,
  onShareComplete: PropTypes.func,
  onShareStart: PropTypes.func,
  size: PropTypes.number,
  theme: PropTypes.oneOf(['classic', 'dark', 'light']),
  title: PropTypes.string,
  url: PropTypes.string,
};

export default GoogleShareToClassRoom;