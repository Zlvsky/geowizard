export const uploadFileService = async (_: File) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
        res: { location: '123tmplocation/tuchola.json' }
      })
    }, 1000)
  })
}

export const createProjectService = async (payload: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
        res: { id: '18100' }
      })
      const dataToSave = {
        id: '18100',
        ...payload.body,
        geodata: {
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [17.86555225013043, 53.92370190337397],
                [17.89414999837418, 53.91723424796899],
                [17.89654333863516, 53.91408660704994],
                [17.9252709228516, 53.90554550778222],
                [17.93328728692992, 53.90171184779993],
                [17.94645476185728, 53.882614244394944],
                [17.95902814983111, 53.86517502915612],
                [17.96250866682131, 53.85980864857777],
                [17.94876556584056, 53.83902510400512],
                [17.95305709890269, 53.82504708361898],
                [17.96986681259747, 53.82160393103749],
                [17.98719022884687, 53.82049072189287],
                [17.99311050477774, 53.81980616176065],
                [18.00495845639137, 53.81869098451813],
                [18.01181791869992, 53.81691654362231],
                [18.03013551408191, 53.81139279842904],
                [18.07706954431379, 53.83500230497964],
                [18.1609034022894, 53.86984835987789],
                [18.21269989458581, 53.887332992587005],
                [18.23693259113448, 53.896553644853725],
                [18.21723798636253, 53.904560202455826],
                [18.21357812501219, 53.920143771320056],
                [18.21363382296403, 53.92709038352601],
                [18.19572121360073, 53.94007684589019],
                [18.19762755261638, 53.94433285720257],
                [18.19108708310088, 53.94639952895912],
                [18.18741746561714, 53.951139874097095],
                [18.19080465625055, 53.960130063093004],
                [18.1823597429216, 53.96891427590029],
                [18.18765250278976, 53.97497446059447],
                [18.18078448307184, 53.98334878003064],
                [18.16690732806734, 53.99052903150408],
                [18.14552522853081, 53.99717019774724],
                [18.12954830524317, 54.00498735024587],
                [18.12127074375786, 54.0147627908556],
                [18.0995218308129, 54.020488453654195],
                [18.09407259439827, 54.02616850372897],
                [18.09089343215916, 54.03619135832014],
                [18.08173164486654, 54.042888828447275],
                [18.06232050908863, 54.04497067375996],
                [18.05193529557014, 54.04172773465615],
                [18.04595476500043, 54.038417826878515],
                [18.04098703043776, 54.033484067354465],
                [18.03631684988288, 54.026413191105604],
                [18.03584401215393, 54.020516241335116],
                [18.02595079881061, 54.01353967344295],
                [18.02531666082594, 54.00883327261951],
                [18.0201668029545, 54.00884244348029],
                [18.0095920706534, 54.00463235314871],
                [17.99511047430087, 54.002651030794794],
                [17.9912914597191, 54.00438660122089],
                [17.98655704483306, 54.00112951017613],
                [17.9735916923749, 54.00273319364348],
                [17.96647201082402, 53.9998290898059],
                [17.95844046292074, 54.000219135311056],
                [17.94936698000455, 54.00222488413479],
                [17.94019168704356, 54.002544979375386],
                [17.93472144761861, 54.00467662186105],
                [17.92978757816238, 54.00610615908704],
                [17.92029575143615, 54.00831930118284],
                [17.9164550509063, 54.009830292522054],
                [17.91860602857, 54.00590582247594],
                [17.91596701069014, 54.00202564474333],
                [17.91296846593583, 53.99789768237693],
                [17.91478893261115, 53.996098829154334],
                [17.91865129891548, 53.99696275322373],
                [17.92213171986494, 53.99780519552064],
                [17.92463691618019, 54.00001561022847],
                [17.92696569769626, 53.99752564654159],
                [17.92729358532003, 53.99518562292084],
                [17.92663232050487, 53.99117133016142],
                [17.92439023203684, 53.98686977898964],
                [17.92125560931209, 53.986507535097786],
                [17.92204918512634, 53.98090179460587],
                [17.92274821964507, 53.97600107947565],
                [17.92215639961007, 53.96849433641282],
                [17.92107492801655, 53.96190252514498],
                [17.91909212024819, 53.95901307153474],
                [17.91489962736519, 53.954874414408266],
                [17.90529371516668, 53.95306819105832],
                [17.9022542253741, 53.94944002683758],
                [17.89973017881621, 53.94536261426899],
                [17.89484597466226, 53.94375818986754],
                [17.89175273987138, 53.94060022139695],
                [17.86555225013043, 53.92370190337397]
              ]
            ]
          },
          properties: {
            description:
              'The Tuchola Forest, also known as Tuchola Pinewoods or Tuchola Conifer Woods, (the latter a literal translation of Polish: Bory Tucholskie; Kashubian: T\u00ebch\u00f2lscz\u00e9 B\u00f2r\u00eb; German: Tuchler or Tucheler Heide) is a large forest complex near the town of Tuchola in northern Poland. With 3,200 km2 of dense spruce and pine forest, the area is one of the biggest forests in Poland and Central Europe.'
          },
          id: '1681738479351',
          bbox: null
        }
      }
      localStorage.setItem('project', JSON.stringify(dataToSave))
    }, 1000)
  })
}

export const failCreateProjectService = async (_: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 400,
        res: { message: 'Project creation failed' }
      })
    }, 1000)
  })
}

export const getProjectService = async (_: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
        res: JSON.parse(localStorage.getItem('project') || '{}')
      })
    }, 1000)
  })
}
