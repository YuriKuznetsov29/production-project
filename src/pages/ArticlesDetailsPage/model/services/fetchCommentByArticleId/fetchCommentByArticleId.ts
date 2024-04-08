import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { Comment } from '@/entities/Comment/model/type/comment'

export const fetchCommentByArticleId = createAsyncThunk<
    Comment[],
    string | undefined,
    ThunkConfig<string>
>('articleDetails/fetchCommentByArticleId', async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi

    if (!articleId) {
        return rejectWithValue('error')
    }

    try {
        const response = await extra.api.get(`/comments`, {
            params: {
                articleId,
                _expand: 'user',
            },
        })

        if (!response.data) {
            throw new Error()
        }

        return response.data
    } catch (e) {
        console.log(e)
        return rejectWithValue('error')
    }
})
