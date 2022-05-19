import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, ImageBackground, SafeAreaView, ScrollView, SectionList, StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar hidden={true} />
      <ScrollView>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

function Footer() {

  const sections = [{ title: 'Contatos', data: contatos }, { title: 'Social', data: social }, { title: 'Dev', data: dev }]

  const contatos = [
    {
      icon: <MaterialIcons name="email" size={24} color="black" />,
      href: 'mailto:severinocarvalho14@gmail.com',
      target: '_blank',
      title: 'Email',
      text: 'severinocarvalho14@gmail.com',
      class: 'email'
    },
    {
      icon: <MaterialIcons name="phone" size={24} color="black" />,
      href: 'tel:+5584994650540',
      target: '_self',
      title: 'Phone',
      text: '+55 (84) 99465-0540',
      class: 'phone'
    }
  ];

  const social = [
    {
      icon: <FontAwesome5 name="discord" size={24} color="black" />,
      href: 'https://discord.gg/89BGgpSA',
      target: '_blank',
      title: 'Discord',
      text: 'Discord',
      class: 'discord'
    },
    {
      icon: <MaterialIcons name="facebook" size={24} color="black" />,
      href: 'https://web.facebook.com/Netollyno/',
      target: '_blank',
      title: 'Facebook',
      text: 'Facebook',
      class: 'facebook'
    },
    {
      icon: <FontAwesome5 name="instagram" size={24} color="black" />,
      href: 'https://www.instagram.com/oh_netin/',
      target: '_blank',
      title: 'Instagram',
      text: 'Instagram',
      class: 'instagram'
    },
    {
      icon: <FontAwesome5 name="linkedin" size={24} color="black" />,
      href: 'https://www.linkedin.com/in/severino-carvalho-019899175/',
      target: '_blank',
      title: 'LinkedIn',
      text: 'LinkedIn',
      class: 'linkedin'
    },
    {
      icon: <FontAwesome5 name="whatsapp" size={24} color="black" />,
      href: 'https://wa.me/5584994650540',
      target: '_blank',
      title: 'WhatsApp',
      text: 'WhatsApp',
      class: 'whatsapp'
    }
  ];

  const dev = [
    {
      icon: <FontAwesome5 name="github" size={24} color="black" />,
      href: 'https://github.com/severino-carvalho',
      target: '_blank',
      title: 'GitHub',
      text: 'GitHub',
      class: 'github'
    }
  ]

  return (
    <View style={styles.content}>
      <View style={[styles.container, styles.alignSelfCenter]}>
        <View style={[styles.profile, styles.alignSelfCenter]}>
          <Image source={require('./imgs/610_6671.jpg')} resizeMode={'cover'} style={styles.profileImg} />
          <Text style={styles.titleProfile}>{'Técnico em Informática'}</Text>
          <Text style={styles.educationProfile}>{'Instituto Federal de Ciencia e Tecnologia do Rio Grande do Norte - IFRN'}</Text>
          <Text style={styles.titleProfile}>{'Desenvolvedor Web'}</Text>
          <Text style={styles.educationProfile}>{'Instituto Metrópole Digital - IMD/UFRN'}</Text>
        </View>

        <View style={[styles.social]}>
          <SectionList
            sections={sections}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Item title={item} />}
            renderSectionHeader={({ section: { title } }) => (<Text style={styles.titleSection}>{title}</Text>)}>

          </SectionList>
        </View>
      </View>
    </View>
  )
}

function Item({ title }) {
  return (
    <View style={styles.itemSection}>
      <Text style={styles.titleItem}>{title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({

  alignSelfCenter: { alignSelf: 'center' },

  justifyContentCenter: { justifyContent: 'center' },

  container: {
    width: '90%',
  },

  content: {
    width: '100%',
    height: '100%',
    backgroundColor: '#263238',
    color: '#f1f1f1',
    paddingTop: 30
  },
  profile: {
    width: '100%',
    flex: 12,
    alignItems: 'center',
    minHeight: Dimensions.get('window').height,
    color: '#fff',

  },
  profileImg: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
  },
  titleProfile: {
    color: '#fff',
    fontSize: 22,
    marginTop: 15,
  },
  educationProfile: {
    color: '#fff',
    opacity: .60,
    flexWrap: 'wrap',
    fontSize: 18,
    textAlign: 'center',
  },
  social: {

  },
});
