/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {
    ActivityIndicator,
    Image,
    Linking,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useState } from 'react';


const HomeScreen = () => {
    const [value, onChangeText] = useState('');
    const [books, setBooks] = useState<any>({});
    const [loading, setLoading] = useState<boolean>(false);
    const search = async () => {
        console.log('hii', value);
        setLoading(true);
        let res = await fetch(`http://openlibrary.org/search.json?q=${value.toLowerCase()}`);
        console.log('hii1');
        res = await res.json();
        setBooks(res);

        setLoading(false);
    };
    return (
        <View>
            <View style={[styles.flex, styles.justiarround]} >
                <TextInput
                    editable
                    multiline
                    numberOfLines={4}
                    maxLength={40}
                    onChangeText={e => { onChangeText(e); }}
                    value={value}
                    style={styles.search}
                />
                <TouchableOpacity onPress={search} style={[styles.btn]} >
                    <Text style={[styles.txt]} >Search</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={[styles.scroll]} >
                {loading === true && <ActivityIndicator size="large" color="#C67C4E" />}

                {(books?.docs?.length > 0 && loading === false) &&
                    books.docs
                        .map((i :{
                            title : string,
                            author_name : string,
                            ebook_access : string,
                            isbn?:string,
                            key?:string,
                            image_url?:string,
                            description?:string,
                            language?:string,
                            num_pages?:string,
                        },index : number) => (
                            <View key={index} style={[styles.card]}>
                                <View style={[styles.flex, styles.justiarround]} >
                                    <Text> BOOK :</Text>
                                    <Text>{i.title}</Text>
                                </View>
                                <View style={[styles.flex, styles.justiarround]} >
                                    <Text>Author :</Text>
                                    <Text>{i.author_name[0]}</Text>
                                </View>
                                <View style={[styles.aling]} >
                                    <View style={[styles.aling]}>
                                        <Status_Checker ebook_access={i.ebook_access} />
                                        {i.isbn ? <Image style={[styles.img]} source={{ uri: `http://covers.openlibrary.org/b/isbn/${i.isbn[0]}-M.jpg` }} /> : <Image style={[styles.img]} source={{ uri: 'https://res.cloudinary.com/dabh5hsuk/image/upload/v1709550342/lkyrc8jurisjabcfrkld.jpg' }} />}
                                    </View>
                                    {(i.ebook_access === 'no_ebook' || i.ebook_access === 'unclassified' ) ? <></> : <TouchableOpacity style={[styles.btn, { width: 200 }]} onPress={() => { Linking.openURL(`https://openlibrary.org${i.key}`); }}>
                                        <Text style={[styles.txt]} >Read Book Now</Text>
                                    </TouchableOpacity>}
                                </View>
                            </View>
                        ))}
            </ScrollView>
        </View>
    );
};

function Status_Checker(ebook_access : {ebook_access : string}) {

    if (ebook_access.ebook_access === 'public') {
        return (<View style={[
            styles.badge, { backgroundColor: '#A42CD6' },
        ]}>
            <Text style={styles.white}  >Free</Text>
        </View>);
    }
    if (ebook_access.ebook_access === 'borrowable') {
        return (<View style={[
            styles.badge, { backgroundColor: '#008DD5' },
        ]}>
            <Text style={styles.white}  >Users Only</Text>
        </View>);
    }
    if (ebook_access.ebook_access === 'printdisabled') {
        return (<View style={[
            styles.badge, { backgroundColor: '#0F4C5C' },
        ]}>
            <Text style={styles.white}  >Special</Text>
        </View>);
    }
    if (ebook_access.ebook_access === 'no_ebook') {
        return (<View style={[
            styles.badge, { backgroundColor: '#1B1F3B' },
        ]}>
            <Text style={styles.white}  >Not Available</Text>
        </View>);
    }
    if (ebook_access.ebook_access === 'unclassified') {
        return (<View style={[
            styles.badge, { backgroundColor: '#272727' },
        ]}>
            <Text style={styles.white}  >Not Available</Text>
        </View>);
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    white:{
        color : '#FFFFFF',
      },
    badge: {
        backgroundColor: '#FFF',
        position: 'relative',
        top: 55,
        zIndex: 10,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    img: {
        width: 200,
        height: 300,
        borderRadius: 15,
        marginTop: 30,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        elevation: 2,
    },



    scroll: {
        marginTop: 150,
    },
    flex: { flex: 1, flexDirection: 'row' },
    btn: {
        backgroundColor: '#C67C4E',
        width: 100,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    txt: {
        color: 'white',
    },
    aling: { alignItems: 'center' },
    justify: { justifyContent: 'center' },
    justiarround: { justifyContent: 'space-around' },
    search: {
        backgroundColor: '#F0F0F0',
        height: 50,
        width: 200,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        marginTop: 40,
        paddingLeft: 10,
        fontSize: 16,
    },
});

