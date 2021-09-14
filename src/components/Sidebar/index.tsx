import {
  Box,
  useBreakpointValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton,
  DrawerBody,
} from '@chakra-ui/react';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import SidebarNav from './SidebarNav';

export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer();

  const isDrawerSiderbar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isDrawerSiderbar) {
    return (
      <Drawer isOpen={isOpen} onClose={onClose} placement='left'>
        <DrawerOverlay />
        <DrawerContent bg='gray.800'>
          <DrawerCloseButton mt='2' />
          <DrawerHeader>Navegação</DrawerHeader>
          {/* inserir Divider borderBottomWidth='1px'*/}
          <DrawerBody>
            <SidebarNav />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Box as='aside' w='64' mr='8'>
      <SidebarNav />
    </Box>
  );
}
