import React, { useContext } from 'react';
import { View, TextInput,TouchableOpacity } from 'react-native';
import SearchIcon from 'react-native-vector-icons/AntDesign'
import CloseIcon from 'react-native-vector-icons/AntDesign'
import { myContext } from '../provider/ContextApi';


const SearchBox = () => {
    const { search, setSearch } = useContext(myContext)

    const close=()=>{
        setSearch("")
    }

    return (
        <View className="flex flex-row items-center space-x-2 px-4 py-2 m-4 bg-gray-200 rounded-lg shadow-md shadow-black">
            <SearchIcon name={'search1'} size={18} />
            <TextInput
                placeholder="Search Characters"
                className="flex-1 text-base"
                value={search}
                onChangeText={txt => setSearch(txt)}
            />
            {
                search?
                <TouchableOpacity onPress={close}>
                    <CloseIcon name={'close'} size={18} color={'red'} />
                </TouchableOpacity>
                :null
            }
            
        </View>
    );
};

export default SearchBox;
