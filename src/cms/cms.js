import CMS from 'netlify-cms-app'
import './cms.css'
import '../components/Layout.css'
// import uploadcare from 'netlify-cms-media-library-uploadcare'
// import cloudinary from 'netlify-cms-media-library-cloudinary'

CMS.registerBackend('local', {})
CMS.registerPreviewStyle('../components/Layout.css')
CMS.registerPreviewStyle('./cms.css')

// CMS.registerMediaLibrary(uploadcare)
// CMS.registerMediaLibrary(cloudinary)
import BlogPreview from './BlogPreview'

CMS.registerPreviewTemplate('posts', BlogPreview)
