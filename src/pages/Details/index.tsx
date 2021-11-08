/* eslint-disable react-native/no-inline-styles */
import {useRoute} from '@react-navigation/core';
import * as React from 'react';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Container, Info, SubTitle, Title} from './styles';

interface IRouteParams {
  name: string;
  height: string;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: [string];
  species: [string];
  vehicles: [string];
  starships: [string];
  created: Date;
  edited: Date;
  url: string;
}

function Details() {
  const route = useRoute();
  const params = route.params as IRouteParams;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#1f1c2c'}}>
      <ScrollView>
        <Container>
          <Title>{params.name}</Title>
          <Info>Height: {params.height}</Info>
          <Info>Mass: {params.mass}</Info>
          <Info>Hair Color: {params.hair_color}</Info>
          <Info>Eye Color: {params.eye_color}</Info>
          <Info>Birth Year: {params.birth_year}</Info>
          <Info>Gender: {params.gender}</Info>
          <Info>homeworld: {params.homeworld}</Info>

          <SubTitle>Filmes</SubTitle>
          {params.films.length === 0 ? (
            <Info>0</Info>
          ) : (
            params.films.map(film => <Info>{film}</Info>)
          )}

          <SubTitle>Species</SubTitle>
          {params.species.length === 0 ? (
            <Info>0</Info>
          ) : (
            params.species.map(specie => <Info>{specie}</Info>)
          )}

          <SubTitle>Starships</SubTitle>
          {params.starships.length === 0 ? (
            <Info>0</Info>
          ) : (
            params.starships.map(starship => <Info>{starship}</Info>)
          )}

          <SubTitle>Vehicles</SubTitle>
          {params.vehicles.length === 0 ? (
            <Info>0</Info>
          ) : (
            params.vehicles.map(vehicle => <Info>{vehicle}</Info>)
          )}
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Details;
