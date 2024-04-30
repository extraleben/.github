export function YouTubeEmbed({id, timeCode = 0}) {
  let url = `https://youtu.be/${id}`;
  if (timeCode) url += `?t=${timeCode}`;

  return <div>
    <a href={url}>
      <img src={`https://i3.ytimg.com/vi/${id}/maxresdefault.jpg`}></img>
      <div>{url}</div>
    </a>
  </div>
}