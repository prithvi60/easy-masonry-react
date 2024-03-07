This is a masonry component that can be use to render any set of elements in Masonry fashion.

## 🫶 Usage

Example array of images
  ```
const IMG = [
  {
    src: "https://picsum.photos/id/1/500/500"
  
  },
  {
    src: "https://picsum.photos/id/2/500/500"
  
  },
  {
    src: "https://picsum.photos/id/3/500/500"
  },
    {
    src: "https://picsum.photos/id/4/500/500"
  },
    {
    src: "https://picsum.photos/id/5/500/500"
  },
    {
    src: "https://picsum.photos/id/6/500/500"
  },
];
  ```
Add the elements for Masonry as children mentioned below
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

  
### Props

| Prop                     | Options                  | Desc                                                                                                                                               ß                                                                                                                       |
| ------------------------ | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `height`                 | `screen` `fill`              | **REQUIRED:** default is screen .                                                                                                                                                                                                    |
| `columnCount`               | `{350:1,900:2}`            | **REQUIRED** breakpoints and the number of columns.                                                                                                                      |
| `speed`               | `20s`            | default is 20s.                                                                                                                                                                         |
| `stopOnHover`               | `false` `true`           | default is false.  
| `animation`               | `false` `true`           | default is false.                                                                                                                                                                                               |
     
     ## License
MIT. © 2024 Webibee