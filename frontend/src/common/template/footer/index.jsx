import React from 'react'

export default props => {
  return(
  <footer className="main-footer">
    <strong>
      {`Copyright Bruno R.Novais, ${new Date().getFullYear()}`}
      <a href="https://github.com/midhatdrops" target="_blank" referrerpolicy="strict-origin-when-cross-origin"> Check my GitHub</a>
    </strong>
  </footer>)
}