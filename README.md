# React Test App

(Development is still in progress, code quality will be improved in time)

<br>

<img src="https://i.ibb.co/nwKGyVN/gaming-news.png" >

<img src="https://i.ibb.co/NjZH5pd/gaming-news2.png" >

<br>

**Used Technologies:**

- React(CRA)
- Redux, Redux Thunk (for side effects)
- Typescript for static type checking
- Bulma UI Library
- React Router v5
- Axios for API Calls
- Jest & Enzyme for Unit Testing

# Details

I have used Giant Bomb video game API.

You need to enable CORS with a plugin while running the localhost server. Because GiantBomb Api doesn't support CORS. I suggest this one:

https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc

I didn't want to use the images of the games API provided because some of them look ugly and have low resolutions. I didn't want them to make the design look bad :P Therefore I have created an helper function called "generateImage()" which picks an image from the pool of the local images randomly.
