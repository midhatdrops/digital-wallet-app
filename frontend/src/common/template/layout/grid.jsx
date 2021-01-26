import React, {Component} from 'react'

class Grid extends Component {
  toCssClasses(numbers) {
    const cols = numbers ? numbers.split(' ') : []
    let classes = ''

    if(cols[0]) classes += `col col-xs-${cols[0]}`
    if(cols[1]) classes += `col col-sm-${cols[1]}`
    if(cols[2]) classes += `col col-md-${cols[2]}`
    if(cols[3]) classes += `col col-lg-${cols[3]}`
    return classes
  }

  render() {
    const cssGrid = this.toCssClasses(this.props.cols || 12)
    return(
      <div className={cssGrid}>
        {this.props.children}
      </div>
    )
  }
}

export default Grid