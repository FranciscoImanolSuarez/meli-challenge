import { Stack, Container, Box, Text } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { ST } from 'next/dist/next-server/lib/utils'
import React from 'react'
import api from '../product/api'
import { Product } from '../product/types'
import Link from 'next/link'
interface Props {
  results: Product[];
}

const IndexPage: React.FC<Props> = ({results}) => {
  console.log({results})
  return <Box centerContent padding={4}>  
<Stack width="100%" padding={4} backgroundColor="white" borderRadius={2} boxShadow="sm">
    <Stack>
      {results.map(product =>
      <Link  key={product.id} href={`/${product.id}`}>
      <Stack direction="row" justifyContent="space-between">
      <Stack direction="row">
      <Box 
            backgroundColor="gray.50"
            backgroundImage={`url(${product.image})`}
            backgroundRepeat="no-repeat"
            backgroundSize="contain"
            backgroundPosition="center"
            borderRadius="sm"
            width={180} 
            height={180} 
            minWidth={180}
            minHeight={180}
            src={product.image}
          />
          <Stack>
            <Text fontSize="2xl" fontWeight={500}>
          {product.price.toLocaleString('es-AR', {style:'currency', currency:'ARS'})}

            </Text>
            <Text>{product.title}</Text>
          </Stack>
        </Stack>  
         <Text fontSize="sm">{product.location}</Text>
      </Stack>
      </Link>
      )}
    </Stack>
  </Stack>
  </Box>
}

export const getServerSideProps: GetServerSideProps = async ({query} ) => {
  const results = await api.search(query.q as string);

  return {
    props: {
      results,
    },
  };
};
export default IndexPage
