import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

interface GameDetails {
  spieleratgeberId?: string;
  gamingOhneGrenzenId?: string;
  frontMatter;
}

export function Head(details: GameDetails) {
  // @ts-ignore
  const {siteConfig: { customFields: { gameData: { platforms, usks, genres } }, themeConfig: { navbar: { logo } } }} = useDocusaurusContext();

  const listStyle: React.CSSProperties = {
    marginBottom: 0,
    listStyle: 'none',
    paddingLeft: 0,
  };

  const {tags} = details.frontMatter;

  let data = {
    usk: -1,
    genres: [],
    testplatform: null,
    platforms: [],
    extraleben: -1,
  }

  const regexes = [{
    id: 'usk',
    prefix: "USK",
    addValue(d, pv) {
      return Number(d);
    },
    options: usks
  }, {
    id: 'extraleben',
    prefix: "Extraleben:",
    addValue(d, pv) {
      return Number(d);
    },
    options: [0,1,2,3,4,5]
  }, {
    id: 'genres',
    prefix: 'Genre:',
    options: genres,
    addValue(d, pv = []) {
      console.log(d, pv)
      return [...pv, d];
    }
  }, {
    id: 'platforms',
    prefix: 'Plattform:',
    options: platforms,
    addValue(d, pv = []) {
      return [...pv, d];
    }
  }, {
    id: 'testplatform',
    prefix: "Testplattform:",
    addValue(d, pv) {
      return d;
    },
    options: platforms
  }].map(({ id, prefix, options, ...additional }) => ({ id, regex: new RegExp(`^${prefix} (${options.join('|')})$`), ...additional }))

  outerLoop:
  for (let tag of tags) {
    for (let {id, regex, addValue} of regexes) {
      const r = regex.exec(tag);

      if (r !== null) {
        data[id] = addValue(r[1], data[id]);
        continue outerLoop;
      }
    }
  }

  return <>
    <aside style={{ float: 'right' }}>
      <table style={{ marginLeft: '16px' }}>
        <thead>
          <tr>
            <th colSpan={2}>Schnellübersicht</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>USK</td>
            <td><a href={`https://usk.de/alle-lexikonbegriffe/usk-ab-${data.usk}-jahren/`} target="_blank">Freigegeben ab {data.usk} Jahren</a></td>
          </tr>
          {data.extraleben > -1 &&
            <tr>
              <td>Extraleben</td>
              <td>{new Array(5).fill(null).map((_, i) => <img src={`/${logo.src}`} alt={logo.alt} width={'25rem'} style={{marginRight: '5px', filter: `saturate(${data.extraleben > i ? 1 : 0})`}} />)}</td>
            </tr>
          }
          <tr>
            <td style={{ verticalAlign: 'top' }}>Genres</td>
            <td>{data.genres?.length ? <ul style={listStyle}>{data.genres.map(g => <li>{g}</li>)}</ul> : "Keine Genres"}</td>
          </tr>
          <tr>
            <td style={{ verticalAlign: 'top' }}>Plattformen</td>
            <td>{data.platforms?.length ? <ul style={listStyle}>{data.platforms.map(g => <li style={g === data.testplatform ? {fontWeight: 'bold'} : {}}>{g}</li>)}</ul> : "Keine Plattformen"}</td>
          </tr>
          {details.spieleratgeberId &&
            <tr>
              <td colSpan={2}>
                <a href={`https://spieleratgeber-nrw.de/spiel/${details.spieleratgeberId}/`} target="_blank">Pädagogische Einschätzung beim Spieleratgeber NRW</a>
              </td>
            </tr>
          }
          {details.gamingOhneGrenzenId &&
            <tr>
              <td colSpan={2}>
                <a href={`https://www.gaming-ohne-grenzen.de/spiele/uebersicht/${details.gamingOhneGrenzenId}/`} target="_blank">Einschätzung zur Barrierefreiheit beim Projekt "Gaming ohne Grenzen"</a>
              </td>
            </tr>
          }
        </tbody>
      </table>

      {/* {JSON.stringify(details)} */}
    </aside>
  </>
}