This is a boilerplate to create an NPM package for one or more ReactJS custom hooks and components. I hope you find it helpful.

## 🫶 Usage

const IMG = [
  {
    src: "https://ik.imagekit.io/webibee/Agency/img%201.jpg",
    ratio: "aspect-square",
  },
  {
    src: "https://ik.imagekit.io/webibee/Agency/img%202.jpg",
    ratio: "aspect-square",
  },
  {
    src: "https://ik.imagekit.io/webibee/Agency/img%203.jpg",
    ratio: "aspect-square",
  },
  {
    src: "https://ik.imagekit.io/webibee/Agency/img%204.jpg",
    ratio: "aspect-box",
  },
  {
    src: "https://ik.imagekit.io/webibee/Agency/img%205.jpg",
    ratio: "aspect-square",
  },
  {
    src: "https://ik.imagekit.io/webibee/Agency/img%202.jpg",
    ratio: "aspect-square",
  },
  {
    src: "https://ik.imagekit.io/webibee/Agency/img%205.jpg",
    ratio: "aspect-square",
  },
  {
    src: "https://ik.imagekit.io/webibee/Agency/img%204.jpg",
    ratio: "aspect-box",
  },
  {
    src: "https://ik.imagekit.io/webibee/Agency/img%205.jpg",
    ratio: "aspect-square",
  },
  {
    src: "https://ik.imagekit.io/webibee/Agency/img%201.jpg",
    ratio: "aspect-square",
  },
];


  ```
<Masonry>
      {IMG.map((item, idx) => (
            <img
              alt="..."
              src={item.src}
              className={` max-w-full rounded-md overflow-hidden object-cover object-center`}
              key={idx}
            />
          ))}
</Masonry>
  ```