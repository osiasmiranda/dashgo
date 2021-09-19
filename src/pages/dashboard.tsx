import { Flex, SimpleGrid, Box, Text, theme } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { Header, Sidebar } from '../components';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const options = {
  chart: {
    id: 'basic-bar',
    toolbar: { show: false },
    foreColor: theme.colors.gray[500],
    zoom: { enabled: false },
  },
  grid: { show: false, clipMarkes: false },
  dataLabels: { enabled: false },
  tooltip: { enabled: false, theme: 'dark' },

  fill: {
    type: 'gradient',
    gradient: {
      enabled: true,
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0,
    },
  },

  xaxis: {
    // type: 'category',
    axisBorder: { color: theme.colors.gray[600] },
    axisTicks: { color: theme.colors.gray[600] },
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  },
};
const series = [
  {
    name: 'Receitas-1',
    data: [30, 40, 45, 50, 49, 60, 70, 91, 100],
  },
  {
    name: 'Despesas-2',
    data: [10, 60, 35, 90, 60, 90, 100, 85, 75],
  },
];

export default function Dashboard() {
  return (
    <Flex direction='column' h='100vh'>
      <Header />
      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <Sidebar />
        <SimpleGrid flex='1' gap='4' minChildWidth='320px' align='flex-start'>
          <Box p={['6', '8']} bg='gray.800' borderRadius={8} pb='4'>
            <Text fontSize='lg' mb='4'>
              Inscritos da semana
            </Text>

            <Chart type='area' height={168} series={series} options={options} />
          </Box>

          <Box p={['6', '8']} bg='gray.800' borderRadius={8} pb='4'>
            <Text fontSize='lg' mb='4'>
              Taxa de abertura
            </Text>

            <Chart type='area' height={168} series={series} options={options} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
