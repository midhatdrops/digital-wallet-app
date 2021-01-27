import React,{Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import Test from '../../../operators/if'

class TabContent extends Component {
  render() {
    const visible = this.props.tab.visible[this.props.id]
    const selected = this.props.tab.selected === this.props.id
    return(
      <Test test={visible}>
      <div id={this.props.id} className={`tab-pane ${selected ? 'active': ''}`}>
        {this.props.children}
      </div>
      </Test>
    )
  }
}

const mapStateToProps = state => ({tab: state.tab})

export default connect(mapStateToProps)(TabContent)