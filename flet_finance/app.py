import streamlit as st 
import plotly.express as px
import plotly.figure_factory as ff
import pandas as pd

finance = pd.read_csv('/home/veras/Veras/scripts/Obsidian/Estudo/Geral/Organização/Finanças.csv')
sprints = pd.read_csv('/home/veras/Veras/scripts/Obsidian/Estudo/Geral/Organização/exec.csv')
gantt = pd.read_csv('/home/veras/Veras/scripts/Obsidian/Estudo/Geral/Organização/gantt.csv')  # Mudar para arquivos .sqlite3

st.sidebar.divider()

if st.sidebar.button('Rendimentos'):
    st.plotly_chart(px.line(finance, x="TimeStamp", y="Value"))

st.sidebar.divider()

if st.sidebar.button('Tasks'):
    st.plotly_chart(px.bar(sprints, x="TimeStamp", y="Value"))
    
st.sidebar.divider()

if st.sidebar.button('Gantt'):
    col1, col2 = st.columns(2)
    with col1:
        st.dataframe(gantt, use_container_width=True)
    with col2:
        fig = ff.create_gantt(gantt, index_col='Resource', show_colorbar=True, group_tasks=True)
        st.plotly_chart(fig, use_container_width=True)

st.sidebar.divider()
