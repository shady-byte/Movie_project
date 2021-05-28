import React from 'react';
import { Text, View, Image, SafeAreaView,FlatList, ActivityIndicator, TouchableWithoutFeedback} from 'react-native';
import axios from 'axios';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import {styles} from '../classes/style.js';
import {createMovie} from '../classes/Movie.js';
import {PosterUrl,ApiUrl}  from '../classes/Urls.js'

export class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            totalPages: 1,
            isLoading: false,
            moreDetails: false,
            page: 1,
            data: [],
        }
    }
    componentDidMount() {
        this.setState({isLoading:true})
        this.fetchMovies();
    }

    render() {
        return (
            <SafeAreaView style={styles.appBar}>
                <Text style={styles.appBarText}>List of your favorite Movies</Text>
                <View style={styles.mainContainer}>
                    <FlatList data= {this.state.data} 
                    keyExtractor= {(item,index) => index.toString()}
                    renderItem= {this.renderItem} 
                    onEndReached= {this.loadMore}
                    onEndReachedThreshold= {0.3}
                    ListFooterComponent= {this.footer}
                    />
                </View>
            </SafeAreaView>
        );
    }

    renderItem = ({item}) => {
        return(
            <View style={styles.itemContainer}>
                <Image style={styles.image}
                    source={{
                        uri: PosterUrl+item.posterPath,
                    }}/>
                <Text style={styles.itemText}>{item.title}</Text>
                {item.moreDetails ? 
                    <View style={styles.moreDetails}>
                        <Text style={styles.dateStyle}>{item.releaseDate}</Text>
                        <Text>{item.overview}</Text>
                    </View>
                    : null}
                <TouchableWithoutFeedback onPress= {() => this.displayMoreDetails(item)}>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.detailsText}>more details</Text>
                        {item.moreDetails ? <Icon 
                            name= "keyboard-arrow-up" 
                            type="MaterialIcons" 
                            size= {20} 
                            color="blue"/>
                            : 
                            <Icon 
                            name= "keyboard-arrow-down" 
                            type="MaterialIcons" 
                            size= {20} 
                            color="blue"/>  
                        }
                    </View>   
                </TouchableWithoutFeedback> 
            </View>
        );
    }

    displayMoreDetails= (item) => {
        const temp=this.state.data;
        const index= temp.findIndex((e) => e.title==item.title) 
        temp[index].moreDetails ? temp[index].moreDetails=false : temp[index].moreDetails=true;
        this.setState({
            data:temp,
        })
    }

    footer = () => {
        return(
            this.state.isLoading ?
            <View style={styles.loader}>
                <ActivityIndicator size="large" color="blue"/>
            </View>
            : null
        );
    }

    loadMore = () => {
        this.setState({
            isLoading:true,
        })
        this.fetchMovies();      
    }

    fetchMovies() {
        const movies=[];
        const url= ApiUrl +this.state.page;
        if(this.state.page <= this.state.totalPages) {
            axios.get(url)
            .then(response => {
                response.data.results.map((item) => {
                    movies.push(createMovie(item));
                })
                this.setState({
                    totalPages: response.data.total_pages,
                    isLoading: false,
                    page: (this.state.page)+=1,
                    data: this.state.data.concat(movies),
                })
            })
            .catch(error => {
                console.log(error)
                alert('sorry,Something went wrong')
            })
        }
    }
}

export default HomeScreen;