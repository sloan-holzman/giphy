import React from 'react'

const Footer = ({...props}) => {
  return (
    <footer>
      <p className={props.limitClass}>Results per search: <span class="avoidwrap"><button onClick={() => props.changeLimit(5)}>5</button> / <button onClick={() => props.changeLimit(10)}>10</button> / <button onClick={() => props.changeLimit(25)}>25</button> / <button onClick={() => props.changeLimit(50)}>50</button></span></p>
        <div className="credits">Icons made by <a href="http://www.freepik.com" title="Freepik" rel="noopener noreferrer">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" rel="noopener noreferrer">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></div>
      </footer>
  )
}

export default Footer
