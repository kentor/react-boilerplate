/* eslint max-len: 0 */

import React from 'react';

const Slides = React.createClass({
  getInitialState() {
    return {};
  },

  toggleState(key) {
    return () => {
      this.setState({ [key]: !this.state[key] });
    };
  },

  render() {
    const page = parseInt(this.props.location.pathname.slice(1)) || 1;
    switch (page) {
    case 1:
      return (
        <div>
          <h1>WebCrypto</h1>
        </div>
      );
    case 2:
      return (
        <div>
          <ol>
            <li>AES CBC Encryption</li>
            <li>WebCrypto API</li>
            <li>Uploading to S3</li>
          </ol>
        </div>
      );
    case 3:
      return (
        <div>
          <h1>AES CBC Encryption</h1>
          <p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/80/CBC_encryption.svg" style={{ WebkitFilter: 'invert(100%)' }} />
          </p>
          <p>
            Key Size: 128, 192, or 256 bits.<br />
            Block Size: 16 bytes (128 bits)
          </p>
        </div>
      );
    case 4:
      return (
        <div>
          <h1>AES CBC Padding</h1>
          <p>
            The value of each added byte is the number of bytes that are added
          </p>
          <div>
            <p onClick={this.toggleState('pad1')}>
              <tt className="green">
                037 165 201 133
                {this.state.pad1 &&
                  <span className="red"> 012 012 012 012 012 012 012 012 012 012 012 012</span>
                }
              </tt>
            </p>
            <p onClick={this.toggleState('pad2')}>
              <tt className="green">
                168 200 234 159 035 188 026 198
                {this.state.pad2 &&
                  <span className="red"> 008 008 008 008 008 008 008 008</span>
                }
              </tt>
            </p>
            <p onClick={this.toggleState('pad3')}>
              <tt className="green">
                044 025 080 156 248 146 009 248 062 170 032 217 001 162 246 001
                <br />
                {this.state.pad3 &&
                  <span className="red"> 016 016 016 016 016 016 016 016 016 016 016 016 016 016 016 016</span>
                }
              </tt>
            </p>
          </div>
        </div>
      );
    case 5:
      return (
        <div>
          <h1>WebCrypto API</h1>
          <p>
            Browser Support: Chrome, Firefox, Safari, Edge, IE11 (not promise based)
          </p>
          <ul>
            <li>
              <a onClick={this.toggleState('wc1')}>
                <tt>crypto.getRandomValues(<i>typedArray</i>) => <i>typedArray</i></tt>
              </a>
              <br />
              {this.state.wc1 &&
                <tt>crypto.getRandomValues(new Uint8Array(16))</tt>
              }
            </li>
            <li>
              <a onClick={this.toggleState('wc2')}>
                <tt>crypto.subtle.generateKey(<i>algo</i>, <i>extractable</i>, <i>keyUsages</i>) => <i>Promise</i></tt>
              </a>
              <br />
              {this.state.wc2 &&
                <tt>crypto.subtle.generateKey({'{'} name: 'AES-CBC', length: 256 {'}'}, true, ['encrypt'])</tt>
              }
            </li>
            <li>
              <a onClick={this.toggleState('wc3')}>
                <tt>crypto.subtle.exportKey(<i>format</i>, <i>key</i>) => <i>Promise</i></tt>
              </a>
              <br />
              {this.state.wc3 &&
                <tt>crypto.subtle.exportKey('raw', key)</tt>
              }
            </li>
            <li>
              <a onClick={this.toggleState('wc4')}>
                <tt>crypto.subtle.encrypt(<i>algo</i>, <i>key</i>, <i>buffer</i>) => <i>Promise</i></tt>
              </a>
              <br />
              {this.state.wc4 &&
                <tt>crypto.subtle.encrypt({'{'} name: 'AES-CBC', iv: iv {'}'}, key, new Uint8Array([1,2,3,4]).buffer)</tt>
              }
            </li>
          </ul>
        </div>
      );
    case 6:
      return (
        <div>
          <h1>Upload to s3</h1>
          <ol>
            <li><tt>iv = crypto.getRandomValues()</tt></li>
            <li><tt>key = crypto.subtle.generateKey()</tt></li>
            <li><tt>UploadId = s3.createMultipartUpload</tt></li>
            <li>Encrypt / Upload Parts Loop</li>
            <li><tt>s3.completeMultipartUpload</tt></li>
            <li>Export Encryption Key</li>
          </ol>
        </div>
      )
    case 7:
      return (
        <div>
          <tt style={{ lineHeight: 1 }}>
            ╔═════════════════════════════════════════════════════╗<br/>
            <span style={{ position: 'relative', top: -10 }}>╚═════════════════════════════════════════════════════╝</span>
          </tt>
        </div>
      )
    default:
      return <h1>Page {page}</h1>;
    }
  },
});

export default Slides;
