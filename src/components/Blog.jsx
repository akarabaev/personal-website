const POSTS = [
  { url: 'https://medium.com/@akarabaev96/prefect-an-advanced-guide-on-documenting-inputs-of-your-deployments-3c58538be144', img: 'https://cdn-images-1.medium.com/max/1024/0*DV-CG9maULfTwz9p', title: 'Prefect — an advanced guide on documenting inputs of your deployments' },
  { url: 'https://medium.com/@akarabaev96/static-type-checking-59a5916e9a54', img: 'https://cdn-images-1.medium.com/max/1024/0*wlVGcxWESwy6A5FF', title: 'Static type checking' },
  { url: 'https://medium.com/@akarabaev96/the-easiest-explanation-of-shapley-values-c714b9d55fc0', img: 'https://cdn-images-1.medium.com/max/1024/1*x4hbmhfFrBjM5zNlkFjhRA.jpeg', title: 'The easiest explanation of Shapley values' },
  { url: 'https://medium.com/@akarabaev96/are-you-using-the-shap-library-to-its-full-potential-bb45efce2c9', img: 'https://cdn-images-1.medium.com/max/1024/1*Xe9UAuoRONQcZwhLxweDHw.png', title: 'Are you using the Shap library to its full potential?' },
  { url: 'https://medium.com/@akarabaev96/efficiency-tips-for-data-specialists-a3e9e9e6ede9', img: 'https://cdn-images-1.medium.com/max/1024/0*UsRegdCEfi5xQhbl', title: 'Efficiency Tips for Data Specialists' },
  { url: 'https://medium.com/@akarabaev96/pandas-merge-best-practices-stop-wasting-your-time-on-debugging-the-merge-operations-72778845d9b7', img: 'https://cdn-images-1.medium.com/max/1024/0*jJjrFVm-_UqRD7GG', title: 'Pandas Merge Best Practices — Stop Wasting Your Time on Debugging the Merge Operations' },
  { url: 'https://medium.com/@akarabaev96/datapane-create-interactive-reports-using-pandas-data-frames-interactive-plots-and-markdown-d07f1fb8c9f9', img: 'https://cdn-images-1.medium.com/max/1024/1*gtJeCka-IbI3z1HfoX8scg.jpeg', title: 'Datapane — Create Interactive Reports using Pandas Data Frames, Interactive Plots, and Markdown' },
  { url: 'https://medium.com/@akarabaev96/simplify-filtering-and-transformation-of-python-lists-and-dictionaries-using-pydash-23ccf0232033', img: 'https://cdn-images-1.medium.com/max/1024/1*2C6d-_SZL3hNqQPa8utSCg.jpeg', title: 'Simplify Filtering and Transformation of Python Lists and Dictionaries using Pydash' },
  { url: 'https://medium.com/@akarabaev96/detecting-the-mutation-of-a-pandas-data-frame-using-hash-and-python-decorators-a9e97e5acaf4', img: 'https://cdn-images-1.medium.com/max/1024/1*eTt4AjMkfJhrcYjiTmHwwA.jpeg', title: 'Detecting the mutation of a Pandas Data Frame using Hash and Python Decorators' },
  { url: 'https://medium.com/@akarabaev96/visualization-and-text-representation-of-a-decision-tree-ab52787b25c0', img: 'https://cdn-images-1.medium.com/max/1024/1*3vFLr-c_sEidQES_FfmPDQ.jpeg', title: 'Visualization and Text Representation of a Decision Tree' },
]

export default function Blog() {
  return (
    <section id="blog">
      <h2>Blog</h2>
      <p className="blog-intro">
        Articles on <a href="https://medium.com/@akarabaev96" target="_blank" rel="noopener">Medium</a>:
      </p>
      <ul className="blog-list">
        {POSTS.map((post, i) => (
          <li key={i} className="blog-card">
            <a href={post.url} target="_blank" rel="noopener">
              <img src={post.img} alt="" loading="lazy" width={400} height={225} />
              <span>{post.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
