import React from 'react';
import { AppProps } from 'next/app';
import { ChakraProvider, Stack, Image, Input, IconButton } from '@chakra-ui/react';
import {useRouter} from 'next/router'
const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(`/?q=${event.target["query"].value}`)
  }
  
  return (
  <ChakraProvider>
    <Stack>
      <Stack backgroundColor="yellow.400" 
        direction="row" 
        spacing={6} 
        padding={4}
      >
        <Image src="/logo.png"/>
        <form style={{width:"100%"}} onSubmit={handleSubmit} >
       <Stack spacing={0} direction="row" width="100%">
        <Input name="query" backgroundColor="white" roundedRight={0}/>
        <IconButton roundedLeft={0} 
        aria-label="Search Database" icon={<img src="https://icongr.am/feather/search.svg?size=24&color=#666"/>}/>
       </Stack>
       </form>
      </Stack>
      <Component {...pageProps} />
    </Stack>
  </ChakraProvider>
  )
}

export default App
