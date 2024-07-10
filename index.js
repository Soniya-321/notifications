const Notification = props => {
  //  Write your code here.
  const {container, src, img, heading, children} = props
  return (
    <div className={container}>
      <img src={src} className={img} />
      <p className={heading}>{children}</p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div className='bg-container'>
    <h1 className='main-heading'>Notifications</h1>
    <Notification
      container='card1'
      src='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
      heading='heading'
      children='Information Message'
      img='image-1'
    />
    <Notification
      container='card2'
      src='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
      heading='heading'
      children='Success Message'
      img='image-1'
    />
    <Notification
      container='card3'
      src='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
      heading='heading'
      children='Warning Message'
      img='image-1'
    />
    <Notification
      container='card4'
      src='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
      heading='heading'
      children='Error Message'
      img='image-1'
    />
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
