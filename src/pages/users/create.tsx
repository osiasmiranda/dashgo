import {
  Box,
  Divider,
  Flex,
  Heading,
  VStack,
  SimpleGrid,
  HStack,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { Input } from '../../components/Form/Input';

import Header from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import Link from 'next/link';

export default function CreateUser() {
  return (
    <Box>
      <Header />
      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <Sidebar />
        <Box flex='1' borderRadius={8} bgColor='gray.800' p={['6', '8']}>
          {/* <!--Cabeçalho ->> */}
          <Heading size='lg' fontWeight='normal'>
            Criar Usuário
          </Heading>
          <Divider my='6' borderColor='gray.700' />
          <VStack spacing={['6', '8']}>
            <SimpleGrid minChildWidth='248px' spacing='8' w='100%'>
              <Input name='name' label='Nome Completo' />
              <Input name='email' type='email' label='E-mail' />
            </SimpleGrid>

            <SimpleGrid minChildWidth='248px' spacing={['6', '8']} w='100%'>
              <Input name='password' type='password' label='Senha' />
              <Input name='password' type='password' label='Confirmar Senha' />
            </SimpleGrid>
          </VStack>

          <Flex mt='8' justify='flex-end'>
            <HStack spacing='4'>
              <Link href='/users' passHref>
                <Button colorScheme='whiteAlpha'>Cancelar</Button>
              </Link>

              <Button colorScheme='pink'>Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
