/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  Card,
  Container,
  ContainerFooter,
  Name,
  PageButton,
  TextButton,
  Title,
} from './styles';

import {FlatList} from 'react-native';

import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {SafeAreaView} from 'react-native-safe-area-context';

import api from '../../services/api';

export interface Characters {
  count: string;
  next: string;
  previous: string;
  results: [
    {
      name: string;
      height: string;
    },
  ];
}

function Home() {
  const navigation = useNavigation();
  const [character, setCharacter] = useState<Characters>();
  const [pageNumber, setPageNumber] = useState(1);

  function nextPage() {
    if (character?.next !== null) {
      setPageNumber(pageNumber + 1);
    }
  }

  function prevPage() {
    if (character?.previous !== null) {
      setPageNumber(pageNumber - 1);
    }
  }

  useEffect(() => {
    api
      .get(`/people?page=${pageNumber}`)
      .then(response => setCharacter(response.data));
  }, [pageNumber]);

  return (
    <SafeAreaView>
      <Container>
        {character && (
          <FlatList
            ListHeaderComponent={<Title>Personagens Star Wars</Title>}
            style={{width: '100%'}}
            data={character.results}
            keyExtractor={item => item.name}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <Card onPress={() => navigation.navigate('Details', item)}>
                <Name>{item.name}</Name>
              </Card>
            )}
          />
        )}

        {character && (
          <ContainerFooter>
            <PageButton onPress={prevPage}>
              <TextButton>Página Anterior</TextButton>
            </PageButton>

            <PageButton onPress={nextPage}>
              <TextButton>Página Seguinte</TextButton>
            </PageButton>
          </ContainerFooter>
        )}
      </Container>
    </SafeAreaView>
  );
}

export default Home;
