import Admonition from '@theme/Admonition';

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

export function YouTubeAdmonition({id, timeCode = 0, title = "Hier geht's zum Stream:"}) {
  return <Admonition type="note" icon="" title={title}>
    <YouTubeEmbed id={id} timeCode={timeCode} />
  </Admonition>
}