import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Card} from 'react-native-elements';
const Pais = ({resultado}) => {
  const rutas = [
    {
      id: 'AR',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/2560px-Flag_of_Argentina.svg.png',
    },
    {
      id: 'CA',
      src: 'https://iipcollaborative.org/wp-content/uploads/2020/02/canada.jpg',
    },
    {
      id: 'CO',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/2560px-Flag_of_Colombia.svg.png',
    },
    {
      id: 'CR',
      src: 'https://images.squarespace-cdn.com/content/v1/5994a30fe4fcb5d90b6fbeab/1530920098966-JC1E2EIWEXYEK3DK2RDJ/costa-rica-flag.jpg',
    },
    {
      id: 'ES',
      src: 'https://www.mapsnworld.com/spain/flag-spain.jpg',
    },
    {
      id: 'GT',
      src: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Guatemala_flag_300.png',
    },
    {
      id: 'HN',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Flag_of_Honduras.svg/1260px-Flag_of_Honduras.svg.png',
    },
    {
      id: 'MX',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Mexico.png/1200px-Flag_of_Mexico.png',
    },
    {
      id: 'NI',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Nicaragua.svg/1280px-Flag_of_Nicaragua.svg.png',
    },
    {
      id: 'PA',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/2560px-Flag_of_Panama.svg.png',
    },
    {
      id: 'PE',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Flag_of_Peru_%28state%29.svg/2560px-Flag_of_Peru_%28state%29.svg.png',
    },
    {
      id: 'SV',
      src: 'https://cdn.britannica.com/10/7210-004-65DAD2F0/Flag-El-Salvador.jpg',
    },
    {
      id: 'US',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png',
    },
  ];

  const [info, setinfo] = useState([]);
  const [nombre, setnombre] = useState();
  const [area, setArea] = useState();
  const [urlImage, setUrlImage] = useState();
  useEffect(() => {
    setinfo(resultado);
    Object.values(info).map(e => {
      setnombre(e.nome.abreviado);
      setArea(e.area.total);

      rutas.forEach(item => {
        if (item.id == e.id['ISO-3166-1-ALPHA-2']) {
          setUrlImage(item.src);
          console.log(urlImage);
        }
      });
    });
  });
  return (
    <Card>
      <Card.Title style={{fontSize: 25, fontWeight:'900', borderBottomWidth: 2, borderBottomColor: '#22DDF2'}}>{nombre}</Card.Title>
      <Card.Divider />
      <View style={{justifyContent: 'center'}}>
        <Text style={{textAlign:'center', marginBottom: 15, fontSize: 15, fontWeight:'800'}}>Area:{area * 1000} m2</Text>
        <Image
          style={{width: 200, height: 100, marginBottom: 15, marginHorizontal: 55,}}
          source={{uri:urlImage}}
        />
      </View>
    </Card>
  );
};
export default Pais;
