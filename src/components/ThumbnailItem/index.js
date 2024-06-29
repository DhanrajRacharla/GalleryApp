// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {eachItem, onClickDisplayImage, isOpacity, initialThumbUrlId} = props
  const {id, imageUrl, thumbnailUrl, imageAltText, thumbnailAltText} = eachItem
  const opacity = initialThumbUrlId === id ? 'images' : 'images opacity'

  const addImage = () => {
    onClickDisplayImage(id, imageUrl, imageAltText, id)

    // console.log(id)
  }

  return (
    <li>
      <button>
        <img
          className={`${opacity}`}
          src={thumbnailUrl}
          onClick={addImage}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
