export const SeriesCard = (props) => {
  //console.log(props);
  //Note:- React Destructuring Props
  //const { data } = props; // key:value milta hai
  //(or)
  // eslint-disable-next-line react/prop-types
  const { img_url, name, cast, rating, description, watch_url } = props.data; //forther Destructuring ka matalab data ke andar data

  return (
    <li>
      <div>
        <img src={img_url} alt="sg.webp" width="20%" height="20%" />
      </div>

      <h2>Name : {name}</h2>
      <h3>Rating : {rating}</h3>
      <p>Description : {description}</p>
      <p>Cast : {cast}</p>
      <a href={watch_url} target="_blank">
        <button className="bg-blue-600">Watch Now</button>
      </a>
    </li>
  );
};
