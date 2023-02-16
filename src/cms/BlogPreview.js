import React from 'react'

const BlogPost = ({ data, image }) => {
  return (
    <article className="max-w-2xl mx-auto px-4 sm:px-6 xl:max-w-4xl xl:px-0">
      <header className="pt-2 pb-2 lg:pb-4">
        <img src={image} />
        <div className="space-y-4 text-left">
          <h1 className="text-3xl leading-12 text-gray-800 lg:text-4xl lg:leading-14 mb-2">
            {data.title}
          </h1>
          <p>Published {data.publishedDate}</p>
        </div>
        <p>{data.description}</p>
      </header>

      <div className="mt-4">
        <div dangerouslySetInnerHTML={{ __html: data.body }} />
      </div>
    </article>
  )
}

const BlogPreview = ({ entry, getAsset }) => {
  const details = entry.getIn(['data']).toJS()
  const image = getAsset(entry.getIn(['data', 'featuredimage']))
  return <BlogPost data={details} image={image} />
}

export default BlogPreview
