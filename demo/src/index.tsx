import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconDefinition,
  faAddressBook,
  faAddressCard,
  faArrowAltCircleLeft,
  faBirthdayCake,
  faGlassCheers,
} from '@fortawesome/free-solid-svg-icons';

import { BottomPopup } from './../../src/index';

interface DemoProps {
  nada?: boolean;
}

interface DemoState {
  open: boolean;
}

interface Definitions {
  color: string;
  icon: IconDefinition;
}

const transparency = 0.7;
const colors = [
  `rgba(72, 175, 240, ${transparency})`,
  `rgba(61, 204, 145, ${transparency})`,
  `rgba(255, 179, 102, ${transparency})`,
  `rgba(255, 115, 115, ${transparency})`,
  `rgba(255, 110, 74, ${transparency})`,
  `rgba(255, 102, 161, ${transparency})`,
  `rgba(194, 116, 194, ${transparency})`,
  `rgba(173, 153, 255, ${transparency})`,
];

const definitons = new Array<Definitions>();
definitons.push({ color: colors[0], icon: faAddressBook });
definitons.push({ color: colors[1], icon: faAddressCard });
definitons.push({ color: colors[2], icon: faArrowAltCircleLeft });
definitons.push({ color: colors[3], icon: faBirthdayCake });
definitons.push({ color: colors[4], icon: faGlassCheers });

class Demo extends Component<DemoProps, DemoState> {
  private items: Array<JSX.Element> = new Array<JSX.Element>();

  constructor(props: DemoProps) {
    super(props);

    this.state = {
      open: false,
    };

    for (var item of definitons) {
      this.items.push(
        <div className="circle" style={{ backgroundColor: item.color }} onClick={() => this.toggleOpen()}>
          <FontAwesomeIcon className="icon" icon={item.icon} />
        </div>,
      );
    }

    document.body.style.backgroundColor = 'black';
  }

  private toggleOpen() {
    this.setState({ open: !this.state.open });
  }

  public render(): JSX.Element {
    console.log('STATE', this.state);
    return (
      <div style={{ color: '#fff' }}>
        <h1>Bottom Popup</h1>
        <button onClick={() => this.toggleOpen()}>Toggle</button>
        <BottomPopup open={this.state.open} gutter={40} items={this.items} />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.querySelector('#demo'));
