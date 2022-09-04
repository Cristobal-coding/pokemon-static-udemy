import { Button, Navbar, Text } from '@nextui-org/react'
import Image from 'next/image';
import { useRouter } from 'next/router';
import { PropsWithChildren, FC } from 'react'



export const NavbarFC: FC<PropsWithChildren> = () => {

    const { asPath } = useRouter();


    return (
        <Navbar variant="sticky" isBordered maxWidth='fluid'>
            <Navbar.Brand>
                {/* <AcmeLog /> */}
                <Image
                    src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
                    alt='ditto'
                    width={70}
                    height={70}
                />
                <Text b color="inherit" h3>
                    P
                </Text>
                <Text b color="inherit" h4>
                    ókemon
                </Text>
            </Navbar.Brand>
            <Navbar.Content hideIn="xs">
                {/* <Navbar.Link isActive={asPath === '/'} >
                    <Link href='/'>Pokemones</Link>
                </Navbar.Link>
                <Navbar.Link >
                    <Link href='/'>Habilidades</Link>
                </Navbar.Link> */}

            </Navbar.Content>
            <Navbar.Content>
                <Button size={{ '@xsMax': 'xs' }} bordered shadow color='gradient'>Favoritos</Button>
            </Navbar.Content>
            {/* <Navbar.Content hideIn='sm'>
                <Button size='xs' bordered shadow color='gradient'>Buscar2</Button>
            </Navbar.Content> */}




        </Navbar>
    )
}
