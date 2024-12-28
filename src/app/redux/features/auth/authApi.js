import { apiSlice } from "../api/apiSlice";
import { userRegistration } from "./authSlice";

export const authapi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // Define the registration mutation
        registration: builder.mutation({
            query: (data) => ({
                url: "registration",
                method: "POST",
                body: data,
                credentials: "include", // Include credentials like cookies
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    // Dispatch userRegistration with the activation token
                    dispatch(
                        userRegistration({
                            token: result.data.activationToken,

                        }),

                        // dispatch(
                        //     userTemporary({
                        //         user: result.data.user,
    
                        //     }),


                    );
                } catch (error) {
                    console.error("Error in registration mutation:", error);
                }
            },
        }),
        activation:builder.mutation({
            query:({activation_token,activation_code})=>({
                url:"activate-user",
                method:"POST",
                body:{
                    activation_token,
                    activation_code,
                }
            })

        })
    }),
});

// Export the generated mutation hook
export const { useRegistrationMutation ,useActivationMutation} = authapi;
